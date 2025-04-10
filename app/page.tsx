import Header from './components/Header';
import Item from './components/Item';
import { items } from './data/dummyData';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">What is DawgDonate?</h2>
          <p>We help UGA students donate and receive free items on campus!</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <Item key={item.id} title={item.title} image={item.image} />
          ))}
        </section>
      </main>
    </div>
  );
}