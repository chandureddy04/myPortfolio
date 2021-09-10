import React from 'react'
import TimelineItem from './TimelineItem';
import './Timeline.css'
import SchoolIcon from '@material-ui/icons/School';

const timelineData = [
    {
        text: 'Kakatiya Talent School ',
        date: 'June 2014',
        category: {
            tag: 'SSC',
            color: '#aa1111'
        },
        link: {
            text: '9.5 CGPA'
        }
    },
    {
        text: 'SR Junior College',
        date: '2014 - 2016',
        category: {
            tag: 'INTERMEDIATE',
            color: '#e17b77'
        },
        link: {
            text: '95.8%'
        }
    },
    {
        text: 'CMR College of Engineering and Technology',
        date: '2016 - 2020',
        category: {
            tag: 'B Tech',
            color: '#1DA1F2'
        },
        link: {
            text: '7.65 CGPA'
        }
    },
]

const Timeline = () =>{
    return(
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        )
    )
}

export default Timeline

