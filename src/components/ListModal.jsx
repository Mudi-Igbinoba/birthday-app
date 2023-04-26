import moment from 'moment';
import { Modal, Table } from 'react-bootstrap';
import './modals.css';

const ListModal = ({ show, handleClose, bData }) => {
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
                                <th>Name</th>
                                <th>Birthday</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bData ? (
                                bData.map((e) => (
                                    <tr key={e.id}>
                                        <td className='text-capitalize'>
                                            {e.fullName}
                                        </td>
                                        <td>
                                            {moment(e.date).format(
                                                'Do MMM YYYY'
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr></tr>
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ListModal;
