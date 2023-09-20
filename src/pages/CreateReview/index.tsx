import { useFormik } from 'formik';
import HTMLReactParser from 'html-react-parser';
import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import * as Yup from 'yup';

import { useGetCategoriesQuery } from '../../api/categoryApi';
import { useCreateReviewMutation } from '../../api/reviewApi';
import {
    Alert,
    Badge,
    Button,
    Container,
    ImageUploader,
    Input,
    Range,
    Select,
} from '../../components';
import { Category } from '../../types';
import { CreateReview } from '../../types/Review';
import { extractHashtags } from '../../utils';
import { url } from '../../utils/cloudinary';

const СreateReview = () => {
    const { userId } = useParams();
    const [createReview, { isLoading }] = useCreateReviewMutation();
    const getCategories = useGetCategoriesQuery();
    const [categories, setCategories] = useState<Category[]>([]);
    const [imageUrl, setImageUrl] = useState('');
    const [tags, setTags] = useState<Set<string>>(new Set());
    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allCategories = (await getCategories.refetch()).data;
                if (allCategories) {
                    setCategories(allCategories);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, []);

    const onUpload = (imageUrl: string) => {
        setImageUrl(
            url(imageUrl, {
                cloudName: import.meta.env.VITE_CLOUD_NAME,
                uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
            }),
        );
    };

    const onTextChange = (value: string) => {
        setContent(value);
        setTags(extractHashtags(value));
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            objectName: '',
            grade: 0,
            category: 1,
            image: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            objectName: Yup.string().required('Object name is required'),
            grade: Yup.number()
                .min(0, 'Grade must be at least 0')
                .max(10, 'Grade cannot be greater than 10')
                .required('Grade is required'),
            category: Yup.string().required('Category is required'),
        }),
        onSubmit: async (values) => {
            try {
                const reviewData: CreateReview = {
                    title: values.title,
                    objectName: values.objectName,
                    grade: values.grade,
                    categoryId: values.category,
                    text: content,
                    tags: Array.from(tags),
                    image: imageUrl,
                    userId: parseInt(userId || ''),
                };
                await createReview(reviewData);
            } catch (error) {
                console.error('Error creating review:', error);
            }
        },
    });

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-6 items-start h-full">
                    <div className="flex-1 w-full">
                        <Input
                            name="title"
                            label="Title"
                            placeholder="Title"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && formik.errors.title}
                        />
                        <Input
                            name="objectName"
                            label="Object name"
                            placeholder="Object name"
                            onChange={formik.handleChange}
                            value={formik.values.objectName}
                            onBlur={formik.handleBlur}
                            error={formik.touched.objectName && formik.errors.objectName}
                        />
                        <div className="flex flex-col gap-6 items-center mb-3 md:flex-row">
                            <div className="flex w-full gap-16 justify-start items-center md:w-1/2">
                                <Range
                                    name="grade"
                                    label="My grade"
                                    min={0}
                                    max={10}
                                    step={1}
                                    value={formik.values.grade}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.grade && formik.errors.grade}
                                />
                                <div className="flex w-4 justify-end text-2xl font-bold">
                                    <span>{formik.values.grade}</span>
                                    <span>/10</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Select
                                    name="category"
                                    label="Select category"
                                    options={categories.map((category) => ({
                                        value: String(category.id),
                                        label: category.name,
                                    }))}
                                    value={formik.values.category}
                                    onChange={(value) =>
                                        formik.setFieldValue('category', value)
                                    }
                                    onBlur={formik.handleBlur}
                                    error={
                                        formik.touched.category && formik.errors.category
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <ImageUploader
                        uploadable
                        bgImage={imageUrl || '/assets/no-image.jpg'}
                        onUpload={onUpload}
                    />

                    <div className="flex-1 w-full">
                        <Alert type="info">
                            <p>
                                To add <b>anytag</b> into you review just write anywhere
                                in text usin hash(#) symbol. F.e. <b>#anytag</b>
                            </p>
                        </Alert>
                        <div className="flex flex-col">
                            <div className="flex gap-1 mb-2">
                                <span>Tags:</span>
                                {Array.from(tags).map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                onChange={onTextChange}
                            />
                            <div>
                                <h1 className="text-3xl text-center font-bold m-3">
                                    Preview
                                </h1>
                                <div className=" border-2 p-3">
                                    {HTMLReactParser(content)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pt-3 mt-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <Button type="submit">
                        {isLoading ? 'Creating...' : 'I accept'}
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default СreateReview;
