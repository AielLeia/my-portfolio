import { testimonials } from '@/data';

import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

const Clients = () => {
  return (
    <section id="testimonials">
      <div className="py-20">
        <h1 className="heading">
          Mots aimables de{' '}
          <span className="text-purple">mes collaborateurs</span>
        </h1>
        <div className="flex flex-col items-center mt-10">
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
