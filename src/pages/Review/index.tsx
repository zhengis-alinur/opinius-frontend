import React from 'react';
import { useParams } from 'react-router';

import Container from '../../components/Container';
import Likes from '../../icons/Likes';
import { Review, User } from '../../types/';
import AddComment from './components/AddComment';
import Comments from './components/Comments';
import Content from './components/Content';
import Header from './components/Header';
import Rate from './components/Rate';

const View = () => {
    const { id } = useParams();
    const user: User = {
        userName: 'Aliko',
        img: 'https://xsgames.co/randomusers/assets/avatars/male/23.jpg',
    };
    const review: Review = {
        id: '1',
        grade: 9,
        rating: 4,
        title: 'Call of Duty: Modern Warfare 2 Multiplayer Review',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt velit eu lacinia placerat. Maecenas et tellus commodo, varius leo id, posuere risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in dui sit amet sapien pretium euismod. Fusce sit amet nisi elit. Donec ultricies cursus ex. Praesent eget feugiat massa. Aenean pretium mollis nulla. Sed dignissim ex at enim auctor, sit amet molestie urna hendrerit. Praesent et risus nisi. Nulla facilisis tincidunt elit sit amet finibus.

		Suspendisse vestibulum vehicula mauris ut facilisis. Phasellus hendrerit lectus quis condimentum dictum. Nam volutpat augue gravida, ullamcorper lacus non, condimentum ligula. Suspendisse finibus quis velit quis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla mattis purus mauris, vel fermentum metus vulputate eget. Praesent tincidunt velit eget lectus dignissim auctor. Quisque cursus dolor quis libero ullamcorper venenatis. In fermentum vulputate porta. Donec tincidunt iaculis ipsum, et varius neque scelerisque vitae. Phasellus tortor lectus, finibus id nunc eu, aliquet rhoncus elit.
		
		Morbi arcu est, auctor ac dui posuere, fringilla rutrum massa. Pellentesque et risus malesuada lectus facilisis aliquet mollis in sapien. Nullam sagittis risus tortor, vel consectetur sapien venenatis sed. Donec at placerat enim. Sed vel gravida nisi, sed accumsan magna. Aenean venenatis eget lorem a dignissim. Cras eget ullamcorper urna. Curabitur at consectetur purus. Nulla vestibulum tortor id mauris vehicula dapibus. Phasellus dolor tellus, sagittis sed pretium vel, sollicitudin vel dui. Fusce cursus enim augue, eget congue massa sollicitudin ut. Nam condimentum, nisl et euismod rutrum, quam mi tristique eros, id vestibulum sem diam eget libero. Etiam nec rhoncus ligula. Mauris ex augue, euismod sit amet turpis in, egestas aliquet ex.
		
		Sed gravida interdum ante, non lobortis est sodales ut. Fusce pharetra eleifend felis, eget luctus est varius ut. Phasellus porta lacus nec pretium accumsan. Nullam tempor, nisi ac faucibus viverra, erat felis gravida ipsum, ac hendrerit quam sem sed augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ipsum odio, consectetur sed rhoncus eget, lacinia vitae enim. Fusce ac urna rutrum, vulputate dolor eget, fermentum justo. Nulla tincidunt leo nec tincidunt euismod. Cras id nisi auctor leo malesuada luctus vitae eu justo. Etiam semper porttitor orci. Duis eget ultricies ligula, eget facilisis dui. Sed mattis felis sed nulla ullamcorper commodo. Mauris sit amet sapien non mauris fringilla venenatis. Morbi bibendum a justo et blandit.
		
		Nullam congue, nisl id mattis ullamcorper, quam justo ultrices tortor, vitae auctor felis orci quis ex. Suspendisse lorem leo, varius id tempor viverra, pellentesque vitae erat. Maecenas accumsan maximus augue, a sollicitudin lectus aliquam vitae. Aliquam pulvinar tincidunt quam, sed gravida quam faucibus id. Donec tincidunt nibh non volutpat rhoncus. Ut commodo finibus turpis et mollis. Vestibulum in sapien aliquam, pretium odio et, sollicitudin ex. Aliquam luctus mauris nunc, vel maximus velit pharetra sit amet. Suspendisse nec nibh ut turpis laoreet lobortis nec vel purus. Cras lacinia, mauris non posuere feugiat, elit urna auctor velit, et interdum mauris odio sit amet metus. Fusce commodo magna non elit efficitur vestibulum. Suspendisse tempus diam sed eros laoreet, vitae cursus lorem tempor.`,
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg?t=1692824991',
        comments: [
            {
                userId: '1',
                text: 'Nullam congue, nisl id mattis ullamcorper, quam justo ultrices tortor, vitae auctor felis orci quis ex. Suspendisse lorem leo, varius id tempor viverra, pellentesque vitae erat. Maecenas accumsan maximus augue, a sollicitudin lectus aliquam vitae. Aliquam pulvinar tincidunt quam, sed gravida quam faucibus id. Donec tincidunt nibh non volutpat rhoncus. Ut commodo finibus turpis et mollis. Vestibulum in sapien aliquam, pretium odio et, sollicitudin ex. Aliquam luctus mauris nunc, vel maximus velit pharetr',
            },
            {
                userId: '1',
                text: 'Nullam congue, nisl id mattis ullamcorper, quam justo ultrices tortor, vitae auctor felis orci quis ex. Suspendisse lorem leo, varius id tempor viverra, pellentesque vitae erat. Maecenas accumsan maximus augue, a sollicitudin lectus aliquam vitae. Aliquam pulvinar tincidunt quam, sed gravida quam faucibus id. Donec tincidunt nibh non volutpat rhoncus. Ut commodo finibus turpis et mollis. Vestibulum in sapien aliquam, pretium odio et, sollicitudin ex. Aliquam luctus mauris nunc, vel maximus velit pharetr',
            },
            {
                userId: '1',
                text: 'Nullam congue, nisl id mattis ullamcorper, quam justo ultrices tortor, vitae auctor felis orci quis ex. Suspendisse lorem leo, varius id tempor viverra, pellentesque vitae erat. Maecenas accumsan maximus augue, a sollicitudin lectus aliquam vitae. Aliquam pulvinar tincidunt quam, sed gravida quam faucibus id. Donec tincidunt nibh non volutpat rhoncus. Ut commodo finibus turpis et mollis. Vestibulum in sapien aliquam, pretium odio et, sollicitudin ex. Aliquam luctus mauris nunc, vel maximus velit pharetr',
            },
        ],
    };
    return (
        <div className="flex flex-col justify-between w-full gap-5">
            <Container className="flex flex-col gap-5 items-center">
                <Header user={user} review={review} />
                <Content text={review.text} />
                <div className="self-start">
                    <p className="font-bold">
                        {user.userName + "'"}s final rate: {review.grade}/10
                    </p>
                </div>
                <h1>Did you like this review?</h1>
                <Likes scale={4} />
                <Rate rating={review.rating} />
            </Container>
            <AddComment />
            <Comments comments={review.comments} />
        </div>
    );
};

export default View;
