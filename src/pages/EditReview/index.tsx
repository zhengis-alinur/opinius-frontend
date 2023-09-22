import { useFormik } from 'formik';
import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup';

import { useGetCategoriesQuery } from '../../api/categoryApi';
import { useGetReviewByIdQuery, useUpdateReviewMutation } from '../../api/reviewApi';
import {
    Alert,
    Button,
    Container,
    ImageUploader,
    Input,
    Range,
    Select,
} from '../../components';
import { Category } from '../../types';
import { Review, UpdateReview } from '../../types/Review';
import { extractHashtags } from '../../utils';
import { url } from '../../utils/cloudinary';

const EditReview = () => {
    const { id } = useParams();
    const [review, setReview] = useState<
        Omit<
            Review,
            'likes' | 'id' | 'comments' | 'userId' | 'ratings' | 'rating' | 'createdAt'
        >
    >({
        title: '',
        objectName: '',
        grade: 0,
        categoryId: 0,
        image: '',
        tags: [],
        text: '',
    });
    const navigate = useNavigate();
    const [updateReview, { isLoading }] = useUpdateReviewMutation();
    const getReview = useGetReviewByIdQuery(id || '');

    const getCategories = useGetCategoriesQuery();
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<Category>();
    const [tags, setTags] = useState<Set<string>>(new Set());

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const { t } = useTranslation();

    const onTextChange = (value: string) => {
        setContent(value);
        setTags(extractHashtags(value));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await getReview.refetch()).data?.review;
                if (data) {
                    setReview(data);
                    setTags(new Set(data.tags.map((tag) => tag.name)));
                    setContent(data.text);
                }
                const allCategories = (await getCategories.refetch()).data;
                if (allCategories) {
                    setCategory(
                        [...allCategories].find((el) => el.id === data?.categoryId),
                    );
                    setCategories(allCategories);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, []);

    const onImageUpload = (imageUrl: string) => {
        setImageUrl(
            url(imageUrl, {
                cloudName: import.meta.env.VITE_CLOUD_NAME,
                uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
            }),
        );
    };

    const formik = useFormik({
        initialValues: {
            title: review.title,
            objectName: review.objectName,
            grade: review.grade,
            category: review.categoryId,
            image: review.image,
            text: review.text,
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            objectName: Yup.string().required('Object name is required'),
            grade: Yup.number()
                .min(0, 'Grade must be at least 0')
                .max(10, 'Grade cannot be greater than 10')
                .required('Grade is required'),
            category: Yup.string().required('Category is required'),
            text: Yup.string().required('Review text is required'),
        }),
        enableReinitialize: true,
        onSubmit: async (values) => {
            try {
                const reviewData: UpdateReview = {
                    id: parseInt(id || ''),
                    title: values.title,
                    objectName: values.objectName,
                    grade: values.grade,
                    categoryId: values.category,
                    text: content,
                    tags: Array.from(tags),
                    image: imageUrl || review.image,
                };
                updateReview(reviewData).then(() => navigate(`/review/${id}`));
                formik.resetForm();
                setContent('');
            } catch (error) {
                console.error('Error creating review:', error);
            }
        },
    });

    return (
        <Container>
            {review && (
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-6 items-start h-full">
                        <div className="flex-1 w-full">
                            <Input
                                name="title"
                                label={t('review-title')}
                                placeholder={t('title-placeholder')}
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                onBlur={formik.handleBlur}
                                error={formik.touched.title && formik.errors.title}
                            />
                            <Input
                                name="objectName"
                                label={t('review-object')}
                                placeholder={t('object-placeholder')}
                                onChange={formik.handleChange}
                                value={formik.values.objectName}
                                onBlur={formik.handleBlur}
                                error={
                                    formik.touched.objectName && formik.errors.objectName
                                }
                            />
                            <div className="flex flex-col gap-6 items-center mb-3 md:flex-row">
                                <div className="flex w-full  gap-16 justify-start items-center md:w-1/2">
                                    <Range
                                        name="grade"
                                        label={t('my-grade')}
                                        min={0}
                                        max={10}
                                        step={1}
                                        value={formik.values.grade}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={
                                            formik.touched.grade && formik.errors.grade
                                        }
                                    />
                                    <div className="flex w-4 justify-end text-2xl font-bold">
                                        <span>{formik.values.grade}</span>
                                        <span>/10</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    {category && (
                                        <Select
                                            name="category"
                                            label={t('select-category')}
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
                                                formik.touched.category &&
                                                formik.errors.category
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <ImageUploader
                            uploadable
                            bgImage={imageUrl || review.image || '/assets/no-image.jpg'}
                            onUpload={onImageUpload}
                        />

                        <div className="flex-1 w-full">
                            <Alert type="info">
                                <p>{t('tag-adding-info')}</p>
                            </Alert>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                onChange={onTextChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center pt-3 mt-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <Button type="submit">
                            {isLoading ? t('updating') : t('update-review')}
                        </Button>
                    </div>
                </form>
            )}
        </Container>
    );
};

export default EditReview;
