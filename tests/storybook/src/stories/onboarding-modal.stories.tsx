/* deepscan-disable USELESS_ARROW_FUNC_BIND */
import { TourModal } from '@affine/component/tour-modal';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'AFFiNE/TourModal',
  component: TourModal,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta;

export const Basic: StoryFn = ({
  reflame: { rootRef } = { rootRef: undefined },
} = {}) => {
  return <TourModal ref={rootRef} open={true} />;
};
Basic.args = {
  logoSrc: '/imgs/affine-text-logo.png',
};
