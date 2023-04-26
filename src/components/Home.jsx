import moment from 'moment';
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Moment from 'react-moment';
import AddModal from './AddModal';
import './home.css';
import ListModal from './ListModal';

const Home = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [birthdayData, setBirthdayData] = useState();
    const [todayData, setTodayData] = useState();
    const date = moment().format('MM-DD');
    const [birthdaysToday, setBirthdaysToday] = useState();

    const fetchBirthdays = () => {
        fetch('http://localhost:3000/birthdays')
            .then((res) => res.json())
            .then((data) => {
                setBirthdayData(data);
            });
    };
    console.log(birthdayData);

    useEffect(() => {
        fetchBirthdays();
    }, []);

    useEffect(() => {
        if (birthdayData && birthdayData.length > 0) {
            setBirthdaysToday(
                birthdayData.filter(
                    (e) => moment(e.date).format('MM-DD') === date
                )
            );
        } else if (birthdayData && birthdayData.length === 0) {
            setTodayData(<p>No birthdays saved</p>);
        }
    }, [birthdayData]);

    useEffect(() => {
        if (birthdaysToday && birthdaysToday.length > 0) {
            setTodayData(
                birthdaysToday.map((e) => (
                    <p key={e.id}>
                        {e.fullName} - {moment(e.date).format('Do MMM YYYY')}
                    </p>
                ))
            );
        } else if (birthdaysToday && birthdaysToday.length === 0) {
            setTodayData(<p>Sadly, there are no birthdays today 😢</p>);
        }
    }, [birthdaysToday]);

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
                    {todayData}
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
                    bData={birthdayData}
                    fetchBDay={fetchBirthdays}
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
                    bData={birthdayData}
                    fetchBDay={fetchBirthdays}
                />
            </Container>
        </main>
    );
};

export default Home;
