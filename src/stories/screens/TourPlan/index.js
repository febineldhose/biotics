import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';
import styles from './styles';
import Seperator from '../../../Components/Seperator';
import CardView from 'react-native-cardview';
import FloatingButton from '../../../Components/floatingButton';
import {doctorIcon} from '../../../../assets/staticImages';
import Search from '../../../Components/Search';
import moment from 'moment';
import AppHeader from '../../../Components/header';
import {SCREENS} from '../config';
export default class TourPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <AppHeader {...this.props} centerlabel="Tour Plan" />
        <View style={{alignSelf: 'center', width: '90%'}}>
          <Seperator height={20} />
          <Search placeholder={'Search list'} />
          <Seperator height={10} />
        </View>
        {!this.state.loading && (
          <FlatList
            data={this.state.tour}
            ListEmptyComponent={this.emptyComponent}
            keyExtractor={(item, index) => index.toString()}
            // rendering List Items to flatlist component
            renderItem={({item}) => {
              return this.state.tour == undefined ? null : this.state.tour
                  .length > 0 ? (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    this.props.navigation.navigate('ViewTourPlan', {
                      id: item.id,
                    })
                  }>
                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.card3}>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={doctorIcon} style={styles.doctor} />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 5,
                        }}>
                        <View
                          style={{
                            width: '70%',
                            padding: 5,
                            flexDirection: 'column',
                          }}>
                          <Text style={styles.cardtext1}>
                            {item.created_by}
                          </Text>
                          <Text style={styles.cardtext3}>
                            {item.counter_name}
                          </Text>
                        </View>
                        <View
                          style={{
                            //width: '50%',
                            marginTop: 5,
                            alignItems: 'center',
                            //justifyContent: 'center',
                          }}>
                          <Text style={styles.department}>
                            {moment(item.tour_date).format('DD-MM-YYYY')}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </CardView>
                </TouchableOpacity>
              ) : null;
            }}
            //ItemSeparatorComponent={this.renderSeparator}
          />
        )}

        <FloatingButton
          onPress={() => this.props.navigation.navigate(SCREENS.CreateTourPlan)}
        />
      </View>
    );
  }
}
