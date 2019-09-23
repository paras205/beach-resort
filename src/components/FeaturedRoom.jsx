import React, { Component } from 'react'
import { RoomContext } from '../context';
import Room from './Room';
import Loading from './Loading';
import Title from './Title';

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}></Room>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured Rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
