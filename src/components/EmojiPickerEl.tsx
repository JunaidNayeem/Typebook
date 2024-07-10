import { Box } from "@chakra-ui/react";
import EmojiPicker, { EmojiStyle, Theme } from "emoji-picker-react";
import type { Emoji } from "../hooks/useHandler";
import useThemeKey from "../hooks/useThemeKey";

interface Props {
	onEmojiClick: ({ emoji }: Emoji) => void;
	top: string;
}

function EmojiPickerEl({ onEmojiClick, top }: Props) {
	const themeKey = useThemeKey();
	return (
		<>
			<Box
				style={{
					position: "absolute",
					top,
					zIndex: "2",
				}}
			>
				<EmojiPicker
					theme={Theme[themeKey]}
					onEmojiClick={onEmojiClick}
					lazyLoadEmojis={true}
					autoFocusSearch={false}
					emojiStyle={EmojiStyle.NATIVE}
				/>
			</Box>
		</>
	);
}

export default EmojiPickerEl;
