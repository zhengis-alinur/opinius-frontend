import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { useGetCategoriesQuery } from '../../api/categoryApi';
import { useCreateReviewMutation } from '../../api/reviewApi';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Range from '../../components/Range';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import { CreateReview } from '../../types/Review';
import { categoriesToSelectOptions } from '../../utils';
import { url } from '../../utils/cloudinary';
import ImageLoader from './components/ImageLoader';

const СreateReview = () => {
    const user = useAppSelector(selectUser);
    const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
    const [createReview, { isLoading }] = useCreateReviewMutation();
    const getCategories = useGetCategoriesQuery();
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const allCategories = (await getCategories.refetch()).data;
                if (allCategories) {
                    setCategories(categoriesToSelectOptions(allCategories));
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

    const formik = useFormik({
        initialValues: {
            title: '',
            object: '',
            grade: '0',
            category: '',
            image: '',
            text: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            object: Yup.string().required('Object name is required'),
            grade: Yup.number()
                .min(0, 'Grade must be at least 0')
                .max(10, 'Grade cannot be greater than 10')
                .required('Grade is required'),
            category: Yup.string().required('Category is required'),
            text: Yup.string().required('Review text is required'),
        }),
        onSubmit: async (values) => {
            try {
                const reviewData: CreateReview = {
                    title: values.title,
                    object: values.object,
                    grade: values.grade,
                    categoryId: values.category,
                    text: values.text,
                    tags: ['books'], // Add tags logic here
                    image: imageUrl,
                    userId: user.id,
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
                            name="object"
                            label="Object name"
                            placeholder="Object name"
                            onChange={formik.handleChange}
                            value={formik.values.object}
                            onBlur={formik.handleBlur}
                            error={formik.touched.object && formik.errors.object}
                        />
                        <div className="flex flex-col gap-6 items-center mb-3 md:flex-row">
                            <div className="flex w-full gap-10 justify-between items-center md:w-1/2">
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
                                    options={categories}
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
                    <ImageLoader onUpload={onUpload} />
                    <div className="flex-1 w-full">
                        <Alert type="info">
                            <p>
                                To add <b>anytag</b> into you review just write anywhere
                                in text usin hash(#) symbol. F.e. <b>#anytag</b>
                            </p>
                        </Alert>
                        <TextArea
                            className="your-custom-textarea-class"
                            name="text"
                            label="My Review"
                            placeholder="Share your opinion ..."
                            value={formik.values.text}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.text && formik.errors.text}
                        />
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
