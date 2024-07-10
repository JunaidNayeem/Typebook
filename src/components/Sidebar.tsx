import { Button } from "@chakra-ui/react";
import React from "react";
import type { Page } from "../App";
import Item from "./Item";

interface Props {
	addPage: () => void;
	addSubPage: (parentPage: Page) => void;
	deletePage: (pageId: number) => void;
	pages: Page[];
	setActivePage: (page: Page) => void;
	activePage: Page | null;
}

function Sidebar({
	addPage,
	pages,
	addSubPage,
	setActivePage,
	activePage,
	deletePage,
}: Props) {
	return (
		<>
			{pages.map((page) => (
				<React.Fragment key={page.id}>
					<Item
						page={page}
						addSubPage={addSubPage}
						setActivePage={setActivePage}
						activePage={activePage}
						deletePage={deletePage}
					/>
				</React.Fragment>
			))}
			<Button w={"100%"} onClick={addPage}>
				Add New Page
			</Button>
		</>
	);
}

export default Sidebar;
