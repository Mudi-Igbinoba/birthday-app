import { Modal, Table } from 'react-bootstrap';
import './modals.css';

const ListModal = ({ show, handleClose }) => {
    return (
        <>
            <Modal
                size='lg'
                centered
                id='listModal'
                className='modals'
                show={show}
                onHide={handleClose}>
                <Modal.Header closeButton className='border-0' />

                <Modal.Body className='pb-4'>
                    <h3 className='mb-md-5 mb-4 fs-4'>
                        All your loved ones birthdays in one place
                    </h3>

                    <Table striped hover responsive className='border-dark'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Birthday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ListModal;
