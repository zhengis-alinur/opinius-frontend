import { useEffect, useState } from 'react';

import { useGetCategoriesQuery } from '../../../api/categoryApi';
import { useCreateReviewMutation } from '../../../api/reviewApi';
import Alert from '../../../components/Alert';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Range from '../../../components/Range';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/selectors';
import { CreateReview } from '../../../types/Review';
import { categoriesToSelectOptions } from '../../../utils';
import DropZone from '../../Review/components/DropZone';

const CreateReviewModal = ({ onClose }: { onClose: () => void }) => {
    const user = useAppSelector(selectUser);
    const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
    const [formState, setFormState] = useState<CreateReview>({
        title: '',
        text: '',
        object: '',
        grade: 0,
        tags: ['books'],
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        userId: user.id,
    });

    const [createReview] = useCreateReviewMutation();
    const getCategories = useGetCategoriesQuery();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allCategories = (await getCategories.refetch()).data;
                if (allCategories) {
                    setCategories(categoriesToSelectOptions(allCategories));
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleChange = async ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (categoryId: string) => {
        setFormState((prev) => ({ ...prev, categoryId }));
    };

    const onSubmitReview = () => {
        createReview(formState);
    };

    return (
        <Modal onClose={onClose} title="Create review">
            <form className="h-fit" onSubmit={onSubmitReview}>
                <div className="flex flex-col gap-6 items-start h-full pb-3 md:flex-row">
                    <div className="flex-1 w-full">
                        <Input
                            name="title"
                            onChange={handleChange}
                            placeholder="Title"
                            label="Title"
                            required
                        />
                        <Input
                            name="objectName"
                            onChange={handleChange}
                            placeholder="Object name"
                            label="Object name"
                            required
                        />
                        <div className="flex flex-col gap-6 items-center mb-3 md:flex-row">
                            <div className="flex w-full gap-10 justify-between items-center md:w-1/2">
                                <Range
                                    name="grade"
                                    onChange={handleChange}
                                    className="w-4/6"
                                    label="My grade"
                                    min={0}
                                    max={10}
                                    step={1}
                                    required
                                />
                                <div className="flex w-4 justify-end text-2xl font-bold">
                                    <span>{formState.grade}</span>
                                    <span>/10</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Select
                                    name="category"
                                    label="Select category"
                                    options={categories}
                                    onChange={handleSelectChange}
                                    required
                                />
                            </div>
                        </div>
                        <DropZone />
                    </div>
                    <div className="flex-1 h-[300px] m-h-[300px]">
                        <Alert type="info">
                            <p>
                                To add <b>anytag</b> into you review just write anywhere
                                in text usin hash(#) symbol. F.e. <b>#anytag</b>
                            </p>
                        </Alert>
                        <TextArea
                            name="text"
                            onChange={handleChange}
                            label="My Review"
                            placeholder="Share with your opinion ..."
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        I accept
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            onClose();
                        }}
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                        Decline
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default CreateReviewModal;
