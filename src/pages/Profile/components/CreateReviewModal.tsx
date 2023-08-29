import { ChangeEvent, useState } from 'react';

import Alert from '../../../components/Alert';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Range from '../../../components/Range';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import DropZone from '../../Review/components/DropZone';

const CreateReviewModal = () => {
    const [grade, setGrade] = useState('0');

    const onGradeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGrade(event.target?.value);
    };

    return (
        <Modal title="Create review">
            <form className="h-fit">
                <div className="flex flex-col gap-6 items-start h-full pb-3 md:flex-row">
                    <div className="flex-1 w-full">
                        <Input placeholder="Title" label="Title" />
                        <Input placeholder="Object name" label="Object name" />
                        <div className="flex flex-col gap-6 items-center mb-3 md:flex-row">
                            <div className="flex w-full gap-10 justify-between items-center md:w-1/2">
                                <Range
                                    className="w-4/6"
                                    label="My grade"
                                    min={0}
                                    max={10}
                                    step={1}
                                    onChange={onGradeChange}
                                />
                                <div className="flex w-4 justify-end text-2xl font-bold">
                                    <span>{grade}</span>
                                    <span>/10</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Select
                                    label="Select category"
                                    options={[
                                        'Films',
                                        'Books',
                                        'Games',
                                        'Products',
                                        'Clothes',
                                    ]}
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
                            label="My Review"
                            placeholder="Share with your opinion ..."
                        />
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default CreateReviewModal;
