import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import './modals.css';

const AddModal = ({ show, handleClose, bData, fetchBDay }) => {
    const [submit, setSubmit] = useState(false);

    const [formData, setFormData] = useState({
        id: nanoid(),
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const bool = bData.find(
            (obj) =>
                obj.fullName.toLowerCase() ===
                    formData.fullName.toLowerCase() &&
                obj.date === formData.date
        );
        if (!bool) {
            setSubmit(true);
            alert('Birthday successfully added!');
            handleClose();
        } else {
            alert("Birthday already exists and can't be saved");
        }
    };

    useEffect(() => {
        if (submit) {
            fetch(
                'https://my-json-server.typicode.com/Mudi-Igbinoba/birthday-app-json-server/birthdays',
                {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            fetchBDay();

            setFormData((prevFormData) => {
                return {
                    id: nanoid(),
                    fullName: '',
                    date: '',
                };
            });
            setSubmit(false);
        }

        // fetch('http://localhost:3000/birthdays/Xt9maqWM-7FTYxY1I8aEj', {
        //     method: 'DELETE',
        // });

        // fetch('http://localhost:3000/birthdays/3', {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         id: 3,
        //         fullName: 'Troy',
        //         date: '1999-11-14',
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
    }, [submit]);

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
