import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProjectHubComponent extends Component {
  @tracked projects = [
    {
      title: 'Apple: Leading the Way in Launching a New Servicing Platform',
      image: 'images/apple.png',
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
    {
      title: 'Cloud Suitability and Readiness - Healthcare',
      image: 'images/cloud_strategy.png', // Placeholder image
      sections: [
        {
          subheader: 'Cloud Operational Readiness',
          description:
            'My team and I, led the development of critical deliverables including the Application Estate Portfolio and Cloud Operational Readiness Report. This project required a deep understanding of cloud operations and application architecture.',
        },
        {
          subheader: 'Resource and Timeline Management',
          description:
            'I Managed resources and timelines effectively to deliver high-quality results. This role demanded strong project management skills and a strategic approach to meeting deadlines and project goals.',
        },
      ],
    },
    {
      title: 'Merger & Acquisition Lead - Stock Exchange',
      image: 'images/PM.png', // Placeholder image
      sections: [
        {
          subheader: 'Project Management Excellence',
          description:
            'This project involved managing 12 workstreams, integrating a large stock exchange with an acquired company. The focus was on timely completion and adherence to budget constraints, showcasing advanced project management skills and effective stakeholder communication.',
        },
        {
          subheader: 'Collaborative Teamwork',
          description:
            'I worked in collaboration with DevOps and InfoSec teams, ensuring smooth integration and alignment of IT and security standards. This multidisciplinary approach was key to the project’s success.',
        },
        {
          subheader: 'Stakeholder Communication',
          description:
            'I engaged with stakeholders at various levels, ensuring clear communication and alignment with project goals. This role demanded high-level communication skills and an ability to navigate complex organizational structures.',
        },
      ],
    },
    {
      title: 'Flask Restful API',
      image: 'images/flask.jpg',
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
      title: 'Building My Personal Portfolio Website with Ember.js',
      image: 'images/ember.png',
      url: 'https://github.com/mulvaneya7/portfolio',
      sections: [
        {
          subheader: 'The Vision',
          description:
            'Every developer needs a space to display their talents, projects, and experiences. Recognizing this need, I embarked on a mission to build a personal portfolio website that could serve as my digital identity. My vision was clear - create an impressive, user-friendly, and customizable platform that could effectively communicate my skills and accomplishments to the world.',
        },
        {
          subheader: 'Choosing Ember.js',
          description:
            'Selecting the right technology stack was crucial. After evaluating several options, I decided to go with Ember.js. Why Ember? Because it offers a solid foundation for building ambitious web applications with a strong emphasis on developer productivity. Its conventions and ease of use made it an ideal choice for this project.',
        },
        {
          subheader: 'Challenges and Learning',
          description:
            'Building my portfolio website with Ember.js came with its fair share of challenges and valuable lessons. While Ember.js is known for its productivity, it has a learning curve. I invested time in understanding its conventions and concepts, which paid off in the long run. Ensuring a seamless experience across various devices required meticulous attention to responsive design principles.',
        },
        {
          subheader: 'Conclusion',
          description:
            "Building my personal portfolio website with Ember.js was not just a technical project; it was a reflection of my skills, passion, and commitment to the world of web development. It's a testament to the power of Ember.js as a framework and my dedication to creating a standout online presence.",
        },
      ],
    },
  ];
}
