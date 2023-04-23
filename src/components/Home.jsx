import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AddModal from './AddModal';
import './home.css';
import ListModal from './ListModal';

const Home = () => {
    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    const [showListModal, setShowListModal] = useState(false);

    const handleCloseListModal = () => setShowListModal(false);
    const handleShowListModal = () => setShowListModal(true);

    return (
        <main id='home' className='py-5'>
            <Container>
                <h1 className='display-4 mb-3'>Birthday Reminder 🎂</h1>

                <p className='mb-5'>
                    {' '}
                    The easiest way to never forget a loved one's special day!
                </p>

                <h2 className='fs-2 mb-3 text-decoration-underline'>
                    Today’s Birthdays
                </h2>

                <section id='todayBirthdays' className='mb-5'>
                    <p>Sadly, there are no birthdays today 🥺</p>
                    {/* <p>Beth - 12/11/1999</p>
                    <p>Shanaya - 12/11/1999</p>
                    <p>Troy - 12/11/1999</p> */}
                </section>

                <p className='mb-4'>
                    Make every birthday special and keep your list up-to-date 🎉
                </p>

                <Button
                    id='addBtn'
                    className='d-block mx-auto mb-4 py-4'
                    onClick={handleShowAddModal}>
                    Add A New Birthday
                </Button>

                <AddModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                />

                <Button
                    id='listBtn'
                    className='d-block mx-auto py-4'
                    onClick={handleShowListModal}>
                    View Birthday List
                </Button>

                <ListModal
                    show={showListModal}
                    handleClose={handleCloseListModal}
                />
            </Container>
        </main>
    );
};

export default Home;
