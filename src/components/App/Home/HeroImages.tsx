const HeroImages = () => {
  return (
    <div className="relative flex w-full flex-wrap items-center justify-between gap-2">
      <figure className="left-28 top-12 z-20 w-52 overflow-hidden rounded-lg border-2 bg-card p-1 lg:absolute lg:w-96 lg:p-2">
        <img
          src="/images/people-discussing.jpg"
          alt=""
          className="-scale-x-100 rounded-lg"
        />
      </figure>
      <figure className="left-0 top-0 z-10 size-28 overflow-hidden rounded-lg border-2 bg-card p-1 lg:absolute lg:size-40 lg:p-2">
        <img
          src="/images/graphic-design.jpg"
          className="rounded-md"
          alt="Graphic Design Example"
        />
      </figure>

      <figure className="size:w-32 left-4 top-64 z-30 size-28 overflow-hidden rounded-lg border-2 bg-card p-1 lg:absolute lg:p-2">
        <img src="/images/logo.png" className="rounded-md" alt="" />
      </figure>
      <figure className="right-0 top-64 z-20 aspect-[5/3] w-52 overflow-hidden rounded-lg border-2 bg-card p-1 lg:absolute lg:w-[280px] lg:p-2">
        <img src="/images/web-design.png" className="rounded-md" alt="" />
      </figure>
    </div>
  );
};

export default HeroImages;
