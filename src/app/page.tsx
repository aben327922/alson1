import Hero from '../components/Home/Hero';
import Brands from '../components/Home/Brands';
import Overview from '../components/Home/Overview';
import Categories from '../components/Home/Categories';
import Clients from '../components/Home/Clients';
import Process from '../components/Home/Process';
import Showcase from '../components/Home/Showcase';
import Mission from '../components/Home/Mission';

export default function Home() {
    return (
        <div className="home-page">
            <Hero />
            <Brands />
            <Overview />
            <Categories />
            <Clients />
            <Process />
            <Showcase />
            <Mission />
        </div>
    );
}
