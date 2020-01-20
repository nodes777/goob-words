import { customPrefixes, standardPrefixes } from "./prefixes";
import { customSuffixes, standardSuffixes } from "./suffixes";

export const generateAllGoobWords = () => {
	const allPrefixes = standardPrefixes
		.map(standardPre => {
			return {
				word: `${standardPre.prefix.replace(/-/g, "")}goob`,
				meaning: standardPre.meaning
			};
		})
		.concat(
			customPrefixes.map(customPre => {
				return {
					word: `${customPre.prefix.replace(/-/g, "")}goob`,
					meaning: customPre.meaning
				};
			})
		);

	const allSuffixes = standardSuffixes
		.map(standardSuff => {
			return {
				word: `goob${standardSuff.suffix.replace(/-/g, "")}`,
				meaning: standardSuff.meaning
			};
		})
		.concat(
			customSuffixes.map(customSuff => {
				return {
					word: `goob${customSuff.suffix.replace(/-/g, "")}`,
					meaning: customSuff.meaning
				};
			})
		);

	const allGoobWordsData = [...allPrefixes, ...allSuffixes];

	return allGoobWordsData;
};
