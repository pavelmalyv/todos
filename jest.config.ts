import type { Config } from 'jest';
import { createDefaultEsmPreset } from 'ts-jest';

const presetConfig = createDefaultEsmPreset({
	testEnvironment: 'jsdom',
});

export default {
	...presetConfig,
} satisfies Config;
