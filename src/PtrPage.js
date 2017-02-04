/**
 * Created by k on 2017/2/4.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView
} from 'react-native';

import PullToRefresh from 'react-native-animated-ptr';


export default class PtrPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1!==r2}),
            isRefreshing:false
        };
        this.list = [];
    }

    componentDidMount() {
        this.list = Array.apply(0, new Array(10)).map((x, i)=>{
            return {
                title: `ListView -> ${i} before refresh`,
            }
        });
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.list)
        })
    }

    onRefresh = () => {
        this.setState({isRefreshing: true});
        setTimeout(()=>{
            this.list = [...this.list];
            for(let i = 0; i< this.list.length; i++) {
                this.list[i] = {...this.list, ...{title: `ListView -> ${i} after refresh`,}};
            }
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(this.list),
                isRefreshing: false,
            });
        }, 2000);
    };

    renderRow = (rowData, secId, rowId) => {
        return (
            <View style={{height: 40, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
                <Text>{rowData.title}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white',}}>
                <TouchableOpacity
                    style={{backgroundColor:'#cee', height:64, width:375, alignItems:'center', justifyContent:'center'}}
                    onPress={()=>{this.props.navigator.pop()}}
                >
                    <Text>pop back</Text>
                </TouchableOpacity>
                <PullToRefresh
                    isRefreshing= {this.state.isRefreshing}
                    onRefresh= {this.onRefresh}
                    contentComponent= {
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}
                            renderSeparator={(x, key)=><View key={key} style={{backgroundColor:'#ccc', height:0.5}}/>}
                        />
                    }
                >
                    <PullToRefresh.ScrollAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_launchpad_bg.png')}
                        styleProps={{height: 80, resizeMode: 'contain'}}
                        occurrence={'BEFORE_REFRESH'}
                        direction={'MOVE_DOWN'}
                        xValues={{from:113}}
                        yValues={{from:0, to:20}}
                        shouldHideDuringRefresh={{toXValue:113, toYValue: 120}}
                    />
                    <PullToRefresh.ScrollAnimation
                        componentType={'View'}
                        xValues={{from:50}}
                        yValues={{from:120, to:20}}
                        styleProps={styles.circle}
                        occurrence={'BEFORE_REFRESH'}
                        direction={'MOVE_UP'}
                    />
                    <PullToRefresh.ScrollAnimation
                        componentType={'View'}
                        xValues={{from:0}}
                        yValues={{from:10, to:90}}
                        styleProps={{width:480,height: 200,backgroundColor: '#cccdc8'}}
                        occurrence={'BEFORE_REFRESH'}
                        direction={'MOVE_DOWN'}
                        shouldHideDuringRefresh={{toXValue:0, toYValue: 120}}
                    >
                        <PullToRefresh.FadeAnimation
                            componentType={'View'}
                            styleProps={styles.circle2}
                            occurrence={'BEFORE_REFRESH'}
                            fadeType={'FADE_IN'}
                            maxOpacity={.1}
                            minOpacity={0}
                        />
                    </PullToRefresh.ScrollAnimation>
                    <PullToRefresh.TimedAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_cloud2.png')}
                        styleProps={{height: 20, width: 100,resizeMode: 'contain'}}
                        occurrence={'DURING_REFRESH'}
                        xValues={{from:80}}
                        yValues={{from:-60, to:120}}
                        duration={1300}
                        shouldRepeat={true}
                    />
                    <PullToRefresh.TimedAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_cloud2.png')}
                        styleProps={{height: 20, width: 100,resizeMode: 'contain'}}
                        occurrence={'DURING_REFRESH'}
                        xValues={{from:30}}
                        yValues={{from:-20, to:120}}
                        duration={1500}
                        shouldRepeat={true}
                    />
                    <PullToRefresh.TimedAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_cloud2.png')}
                        styleProps={{height: 20, width: 100,resizeMode: 'contain'}}
                        occurrence={'DURING_REFRESH'}
                        xValues={{from:190}}
                        yValues={{from:-20, to:120}}
                        duration={800}
                        shouldRepeat={true}
                    />
                    <PullToRefresh.TimedAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_cloud2.png')}
                        styleProps={{height: 20, width: 100,resizeMode: 'contain'}}
                        occurrence={'DURING_REFRESH'}
                        xValues={{from:140}}
                        yValues={{from:-20, to:120}}
                        duration={1400}
                        shouldRepeat={true}
                    />
                    <PullToRefresh.TimedAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_cloud2.png')}
                        styleProps={{height: 20, width: 100,resizeMode: 'contain'}}
                        occurrence={'DURING_REFRESH'}
                        xValues={{from:250}}
                        yValues={{from:-20, to:120}}
                        duration={1400}
                        shouldRepeat={true}
                    />
                    <PullToRefresh.ScrollAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_flame.png')}
                        direction={'MOVE_DOWN'}
                        styleProps={{height: 15, resizeMode: 'contain'}}
                        occurrence={'DURING_REFRESH'}
                        xValues={{from:182}}
                        yValues={{from:94, to:94}}
                        shouldRotate= {{direction: 'CLOCKWISE', rotationType: 'ROTATE_CONTINUOUSLY', endRotationDeg:'12deg', rotationTiming: 100, shouldRotateBack: true}}
                    />
                    <PullToRefresh.TimedAnimation
                        componentType={'Image'}
                        xValues={{from:180}}
                        yValues={{from:60, to:120}}
                        duration={300}
                        styleProps={{height:40, width: 40, opacity: .7}}
                        occurrence={'DURING_REFRESH'}
                        direction={'MOVE_DOWN'}
                        imageSrc={require('./images/refresh_smoke.png')}
                    />
                    <PullToRefresh.ScrollAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_ship_bg.png')}
                        direction={'MOVE_DOWN'}
                        styleProps={{height: 80, resizeMode: 'contain'}}
                        occurrence={'BEFORE_REFRESH'}
                        xValues={{from:140}}
                        yValues={{from:-120, to:20}}
                    />
                    <PullToRefresh.ScrollAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_chipmunk.png')}
                        direction={'MOVE_DOWN'}
                        styleProps={{height: 30, resizeMode: 'contain'}}
                        occurrence={'BEFORE_REFRESH'}
                        xValues={{from:178}}
                        yValues={{from:0, to:55}}
                    />
                    <PullToRefresh.ScrollAnimation
                        componentType={'Image'}
                        imageSrc={require('./images/refresh_ship.png')}
                        direction={'MOVE_DOWN'}
                        styleProps={{height: 80, resizeMode: 'contain'}}
                        occurrence={'BEFORE_REFRESH'}
                        xValues={{from:140}}
                        yValues={{from:-120, to:20}}
                    />
                    <PullToRefresh.ScrollAnimation
                        componentType={'Image'}
                        xValues={{from:30, to: 30}}
                        yValues={{from:120, to:100}}
                        styleProps={{height: 25, resizeMode: 'contain'}}
                        occurrence={'BEFORE_REFRESH'}
                        direction={'MOVE_UP'}
                        shouldTriggerAt={121}
                        removeAfterRefresh={true}
                        imageSrc={require('./images/refresh_release.png')}
                    />
                </PullToRefresh>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    row: {
        padding: 10,
        height: 125,
        backgroundColor: '#dccdc8',
        borderTopWidth: 1,
        marginBottom:-1,
        borderBottomColor: '#E5EDF5',
        borderTopColor: '#E5EDF5',
        borderBottomWidth: 1,
    },
    text: {
        textAlign: 'center',
        color: 'black'
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 100/2,
        backgroundColor: 'white',
        opacity: .7
    },
    circle2: {
        width: 45,
        height: 25,
        left: 175,
        borderRadius: 50,
        backgroundColor: 'black',
        transform: [
            {scaleX: 2}
        ]
    }
});
