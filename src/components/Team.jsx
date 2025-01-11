import React from 'react';

const Team = ({tabs, sectionRefs}) => {
  const members = [
    {
      name: 'John Smith',
      designation: 'Admin',
      description:
        'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5ed578988b3c370006234c35/0x0.jpg?format=jpg&crop=1031,1031,x43,y49,safe&height=416&width=416&fit=bounds',
    },
    {
      name: 'Elina Williams',
      designation: 'Manager',
      description:
        'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.',
      image: 'https://static.toiimg.com/photo/62002425.cms',
    },
    {
      name: 'John Smith',
      designation: 'Designer',
      description:
        'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.',
      image: 'data:image/jpeg;base64,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',
    },
  ];

  return (
    <div key={tabs.Team} ref={sectionRefs.Team} className="bg-[#16052cfc] text-white mx-auto p-6 rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="text-white mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 border rounded-lg shadow-sm bg-[#243c5bc7] text-white">
            <div>
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-40 rounded object-cover"
            />
            <h3 className="text-center text-sm font-semibold">{member.name}</h3>
            <p className="text-xs text-center text-[#b588b5] font-semibold mb-2">{member.designation}</p>
            </div>
            <div>
              <p className="text-sm text-[#b588b5] leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
