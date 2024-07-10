import {
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FaEllipsisVertical } from "react-icons/fa6";
import type { Page } from "../App";
import "../assets/css/Item.css";

interface Props {
	page: Page;
	addSubPage: (parentPage: Page) => void;
	deletePage: (pageId: number) => void;
	setActivePage: (page: Page) => void;
	activePage: Page | null;
}

function Item({
	page,
	addSubPage,
	setActivePage,
	activePage,
	deletePage,
}: Props) {
	const handleClick = () => {
		setActivePage(page);
	};

	const isActive = activePage?.id === page.id;
	return (
		<VStack spacing={3} align="stretch">
			<Flex
				border="1px solid gray"
				borderRadius={10}
				justify="space-between"
				align="center"
				paddingLeft={5}
				paddingRight={1}
				backgroundColor={isActive ? "gray" : "unset"}
			>
				<Text w="80%" paddingY={2} onClick={handleClick} cursor="pointer">
					{page.title ? page.title : "Untitled Page"}
				</Text>
				<Menu size="sm">
					<MenuButton
						as={IconButton}
						aria-label="Options"
						icon={<FaEllipsisVertical />}
						variant="unclosed"
						size="sm"
					/>
					<MenuList>
						<MenuItem command="⌘N" onClick={() => addSubPage(page)}>
							Add Sub Page
						</MenuItem>
						<MenuItem command="⌘T" onClick={() => deletePage(page.id)}>
							Delete Page
						</MenuItem>
						<MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
						<MenuItem command="⌘O">Open File...</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
			<ul className="sidebar-list">
				{page.child?.map((item) => (
					<li key={item.id}>
						<Item
							page={item}
							addSubPage={addSubPage}
							setActivePage={setActivePage}
							activePage={activePage}
							deletePage={deletePage}
						/>
					</li>
				))}
			</ul>
		</VStack>
	);
}

export default Item;
