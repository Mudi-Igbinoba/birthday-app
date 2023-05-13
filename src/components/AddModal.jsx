import { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import './modals.css';

const AddModal = ({ show, handleClose, data, birthdays }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        date: '',
    });

    const handleChange = (event) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bool = data.find(
            (obj) =>
                obj.fullName.toLowerCase() ===
                    formData.fullName.toLowerCase() &&
                obj.date === formData.date
        );
        if (!bool) {
            await birthdays.add({
                fullName: formData.fullName,
                date: formData.date,
            });
            alert('Birthday successfully added!');
            setFormData((prevFormData) => {
                return {
                    fullName: '',
                    date: '',
                };
            });
            handleClose();
        } else {
            alert("Birthday already exists and can't be saved");
        }
    };

    return (
        <>
            <Modal
                centered
                id='addModal'
                className='modals'
                show={show}
                onHide={handleClose}>
                <Modal.Header closeButton className='border-0' />

                <Modal.Body className='pb-4'>
                    <h3 className='mb-md-5 mb-4 fs-4'>
                        Fill In Birthday Details
                    </h3>

                    <Form onSubmit={handleSubmit}>
                        <Row className='mb-3'>
                            <Col md={6}>
                                <FloatingLabel
                                    label='Full Name'
                                    className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        placeholder='full name'
                                        autoFocus
                                        required
                                        className='border-0'
                                        name='fullName'
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md={6}>
                                <FloatingLabel label='Birthday'>
                                    <Form.Control
                                        type='date'
                                        placeholder='birthday'
                                        className='border-0'
                                        required
                                        name='date'
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Button type='submit' className='py-3 px-5'>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddModal;
