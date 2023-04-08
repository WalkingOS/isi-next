import {Heading} from '~/components/ui';
import type {Page} from '~/models/page';

type Props = {
	page: Page;
	preview?: boolean;
};

const IndexPage = ({page, preview = false}: Props) => {
	if (preview && !page) {
		return <Heading level='h2'>Loading...</Heading>;
	}

	return (
		<>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return "ff";
			})}
		</>
	);
};

export default IndexPage;
