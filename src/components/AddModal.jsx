import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import './modals.css';

const AddModal = ({ show, handleClose }) => {
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

                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Row className='mb-3'>
                            <Col md={6}>
                                <FloatingLabel label='Name' className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        placeholder='name'
                                        autoFocus
                                        required
                                        className='border-0'
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
