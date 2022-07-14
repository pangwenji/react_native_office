import React from 'react';
import { View } from 'react-native';

const Contracts: React.FC = (props: any) => {

    switch (this.props.route.type) {
        case types.CONTACT_LIST_BASE:
            return (
                <ContactListBase {...this.props} />
            );
        case types.CONTACT_LIST_BUILDER:
            return (
                <ContactListBuilder {...this.props} />
            );
        case types.CONTACT_LIST_DETAIL:
            return (
                <ContactListDetail {...this.props} />
            );
        case types.CONTACT_LIST_APPROVE:
            return (
                <ContactListApprove {...this.props} />
            );
        default:
            return (
                <View/>
            );
    }
}

export default Contracts;