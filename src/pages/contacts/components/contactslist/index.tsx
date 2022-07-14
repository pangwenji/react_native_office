import { Colors } from '@/utils/colors';
import { ContactType } from '@/utils/contact_type';
import React from 'react';
import { FlatListProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// var onEndReach: boolean = false;

const getDate = (timeMilliseconds: number) => {
    let date = new Date(timeMilliseconds);
    let year = date.getFullYear();
    let moths = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDay() + 1).padStart(2, '0')
    return `${year}-${moths}-${day}`;
}


const getStatus = (planTime: number, completeTime: number) => {
    const { listType } = this.props;
    let text = '', date, day;
    switch (listType) {
        case ContactType.CONTACT_LIST_TYPE_PROGRESS:
            let currentDate = new Date();
            date = planTime - currentDate;
            day = Math.floor(date / (24 * 3600 * 1000))
            text = `新任务--剩余${day}天`;
            return text;
        case ContactType.CONTACT_LIST_TYPE_COMPLETE:
            text = `完成于${getDate(completeTime)}`;
            return text;
        case ContactType.CONTACT_LIST_TYPE_INCOMPLETE:
            date = completeTime - planTime;
            day = Math.floor(date / (24 * 3600 * 1000))
            text = `超时${day}天`;
            return text;
        case ContactType.CONTACT_LIST_TYPE_OVERDUE:
            text = `完成于${getDate(completeTime)}`;
            return text;
        default:
            return text;
    }
}

const _renderItem = () => {
    return (
        <TouchableOpacity onPress={this.onSelect.bind(this, rowData)}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>{rowData.TITLE}</Text>
                    <Text style={[styles.status, { color: statusStyle.color }]}>{getStatus(rowData.PLAN_DATE, rowData.COMPLETE_DATE)}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.name}>创建人: {rowData.DISPLAY_NAME}</Text>
                    <Text style={styles.time}>计划完成日期: {getDate(rowData.PLAN_DATE)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const onScroll = () => {
    if (!onEndReach)
        // onEndReach = true;
}
const onEndReach = () => {
    const { dispatch, route, login, contactListBase } = this.props;
    if (canLoadMore && onEndReach) {
        if (contactListBase.taskListHasMore)
            page++;
        dispatch(fetchContactList(CONTACT_LIST_URL, login.rawData.userId, page, this.props.searchTitle, listType));
        canLoadMore = false;
    }
}

const renderFooter = () => {
    const { contactListBase } = this.props;
    if (contactListBase.taskListFetchingMore) {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>正在加载更多……</Text>
            </View>
        )
    }
    return <View />
}

const ContactsList: React.FC = () => {
    const { contactListBase } = this.props;
    return (
        <FlatList
            data={this.state.dataSource.cloneWithRows(contactListBase.contactListData)}
            renderItem={_renderItem}
            style={styles.background}
            onScroll={onScroll}
            onEndReached={onEndReach}
            onEndReachedThreshold={10}
            ListFooterComponent={renderFooter}
        />
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.GRAY_GAY,
    },
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GREY,
        height: 60,
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 14,
        color: Colors.BLACK,
        textAlign: 'left',
    },
    status: {
        flex: 1,
        fontSize: 14,
        color: Colors.GREY,
        textAlign: 'right',
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    name: {
        flex: 1,
        fontSize: 11,
        color: Colors.GREY,
        textAlign: 'left',
    },
    time: {
        flex: 1,
        fontSize: 11,
        color: Colors.GREY,
        textAlign: 'right',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },

    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    }
});


export default ContactsList;