import NextLink from 'next/link';

const items = [
  {
    href: '/',
    title: 'Home',
  },
];

export const TheHeader = () => {
  return (
    <div className="container flex flex-row justify-between content-center w-full py-3 space-x-4">
      <h1 className="text-4xl font-bold text-black">Sup?!</h1>
      <ul className="flex flex-row space-x-4">
        {items.map(item => (
          <li key={item.href} className="flex">
            <NextLink href={`${item.href}`}>
              <a className="self-end">{item.title}</a>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
