interface TestPageProps {
  params: {
    id: string;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
	const id = "#äöü";

	/**
	 * The `id` will be uri-encoded in production, but not in development.
	 * In development this will display a 404 page.
	 * In production this will display the correct page.
	 * 
	 * NOTE: In development, with `encodeURI(id)` (*not* `encodeURIComponent`), this works correct as well.
	 */
  return [{ id }];
}

export default function TestPage(props: TestPageProps) {
  return (
    <main>
			{/* 
			  * The docs say nothing about whether or not params must be uri-decoded by the user.
			  */}
      <pre>params.id is "{decodeURIComponent(props.params.id)}"</pre>
    </main>
  );
}
