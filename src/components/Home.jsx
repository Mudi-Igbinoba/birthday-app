import moment from 'moment';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AddModal from './AddModal';
import './home.css';
import ListModal from './ListModal';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

const db = new Dexie('birthdayApp');
db.version(1).stores({
    birthdays: '++id,fullName,date',
});
const { birthdays } = db;
const Home = () => {
    const allItems = useLiveQuery(() => birthdays.toArray(), []);

    const [showAddModal, setShowAddModal] = useState(false);
    const date = moment().format('MM-DD');

    // eslint-disable-next-line no-unused-vars
    const birthdaysToday = allItems?.filter(
        (e) => moment(e.date).format('MM-DD') === date
    );

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

                <section id='todayBirthdays' className='mb-5 text-capitalize'>
                    {allItems && birthdaysToday.length > 0 ? (
                        birthdaysToday.map((e) => {
                            return (
                                <p key={e.id}>
                                    {e.fullName} -{' '}
                                    {moment(e.date).format('Do MMM YYYY')}
                                </p>
                            );
                        })
                    ) : allItems &&
                      allItems.length > 0 &&
                      birthdaysToday.length === 0 ? (
                        <p>Sadly, there are no birthdays today 😢</p>
                    ) : (
                        <p>No birthdays saved</p>
                    )}
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
                    data={allItems}
                    birthdays={birthdays}
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
                    data={allItems}
                />
            </Container>
        </main>
    );
};

export default Home;
