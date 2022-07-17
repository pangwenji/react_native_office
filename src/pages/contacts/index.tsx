import { NaigatorTypes } from '@/utils/naigator_types';
import React from 'react';
import { View } from 'react-native';
import Approve from './components/approve';
import Base from './components/base';
import Builder from './components/builder';
import Detail from './components/detail';

const Contracts: React.FC = (props: any) => {

    switch (props.route.type) {
        case NaigatorTypes.CONTACT_LIST_BASE:
            return (<Base {...props} />);
        case NaigatorTypes.CONTACT_LIST_BUILDER:
            return (<Builder {...props} />);
        case NaigatorTypes.CONTACT_LIST_DETAIL:
            return (<Detail {...props} />);
        case NaigatorTypes.CONTACT_LIST_APPROVE:
            return (<Approve {...props} />);
        default:
            return (<View />);
    }
}

export default Contracts;