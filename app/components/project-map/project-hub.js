import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProjectHubComponent extends Component {
  @tracked projects = [
    {
      title: 'Flask Restful API',
      image: '/images/flask.jpg',
      url: 'https://github.com/mulvaneya7/microservices_RESTapi_flask',
      sections: [
        {
          subheader: 'Valuable Insights',
          description:
            'To kickstart your project, start by initializing the database using the flask init command. This creates the necessary database structure and adds initial users. Then, fire up the microservices with foreman start to access the full range of features.',
        },
        {
          subheader: 'User Management',
          description:
            'The Users Microservice offers user creation, authentication, and follower management. You can create users, add or remove followers, and authenticate accounts seamlessly. Plus, the REST API makes it easy to integrate these functionalities into your applications.',
        },
        {
          subheader: 'Timeline Interaction',
          description:
            'The Timelines Microservice is perfect for handling timeline interactions. It allows you to post tweets, retrieve user-specific posts, and access a public timeline. Additionally, you can create a "home timeline" featuring posts from users a specific username follows. With these features, managing user timelines becomes a breeze.',
        },
      ],
    },
    {
      title: 'Apple: Leading the Way in Launching a New Servicing Platform',
      image: '/images/apple.png',
      sections: [
        {
          subheader: 'The Project Overview',
          description:
            "The project in question involved the creation and launch of a cutting-edge servicing platform, a pivotal step in enhancing our organization's capabilities. As a leader in this venture, I played a multifaceted role, ensuring that the project was executed flawlessly and delivered on its promises.",
        },
        {
          subheader: 'Project Management and Execution',
          description:
            'In my role, I conducted a wide range of day-to-day activities to keep the project on track. This included gathering requirements, leading grooming sessions, tracking user story numbers, creating detailed reports, and maintaining user stories in the backlog. These tasks demanded attention to detail and a proactive approach to problem-solving, skills that I take pride in.',
        },
        {
          subheader: 'Agile Methodology in Action',
          description:
            "To ensure that our project remained on course, we adopted the Scrum and Agile methodology. This approach allowed us to maintain transparency, efficiency, and alignment throughout the project's lifecycle. By facilitating efficient project delivery, we were able to meet our objectives promptly and resolve any issues that arose in a timely manner.",
        },
        {
          subheader: 'Key Takeaways',
          description:
            'Collaboration is Key: Success often hinges on effective collaboration between diverse teams and stakeholders. Attention to Detail: Thoroughness in tasks like requirement gathering and backlog management is crucial for project success. Agile Methodologies Work: Agile methodologies like Scrum provide a solid framework for project management, ensuring that teams stay on course.',
        },
        {
          subheader: 'Conclusion',
          description:
            'The launch and implementation of the new servicing platform was a testament to my leadership and project management skills. It highlighted my ability to bring together teams from different domains, keep projects on track, and adhere to Agile methodologies for efficient deliveries.',
        },
      ],
    },
  ];
}
