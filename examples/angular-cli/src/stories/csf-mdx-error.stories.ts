import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import documentation from './csf-mdx-error.mdx';

export default {
  title: 'Core|CSF MDX Error',
  decorators: [
    moduleMetadata({
      imports: [
        // Simulate some Angular imports
        CommonModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      page: documentation,
    },
  },
};

export const usage = () => ({
  template: `
    <p>Should show up in story Source tab.</p>
  `,
});
