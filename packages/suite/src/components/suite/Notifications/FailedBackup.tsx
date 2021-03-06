import React from 'react';
import { Link } from '@trezor/components';
import { Translation } from '@suite-components';

import { URLS } from '@suite-constants';
import Wrapper from './components/Wrapper';
import { Props as BaseProps } from './index';

interface Props {
    device: BaseProps['suite']['device'];
}

export default ({ device }: Props) => {
    if (!device?.features?.unfinished_backup) return null;
    return (
        <Wrapper variant="warning">
            <Translation id="TR_FAILED_BACKUP" />
            <Link variant="nostyle" href={URLS.FAILED_BACKUP_URL}>
                <Translation id="TR_WHAT_TO_DO_NOW" />
            </Link>
        </Wrapper>
    );
};
