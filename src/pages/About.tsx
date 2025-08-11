import Layout from '@/components/Layout';
import { useState } from 'react';
import { Target, Eye, Users, Award, CheckCircle, Leaf } from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';
import bensonImage from '@/assets/Bensonjpg.jpg';
import wilsonImage from '@/assets/Wilson.jpg';
import nhialImage from '@/assets/Nhial.jpg';
import matorImage from '@/assets/Mator.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Garang B Kuch',
      role: 'Environmental Expert',
      expertise: `Holds a Master’s in Environmental Science and Engineering from Tongji University, Shanghai China, and a BSc (Hons) in Environmental Technology from the University of Pretoria, South Africa.

Garang is an Environmental Specialist and WASH Expert with extensive experience in environmental science, engineering, and public health. He has successfully led major initiatives in water, sanitation, and hygiene, environmental compliance, and climate resilience, collaborating with organizations such as WHO, JSI, AFENET, and the Ministry of Health in South Sudan. Skilled in environmental impact assessments, WASH infrastructure design, and stakeholder engagement, his research has focused on wastewater treatment using advanced oxidation and coagulation techniques.`,
      image: bensonImage
    },
    {
      name: 'Modi Bosco Wilson',
      role: 'Water Resource Specialist',
      expertise: `Holds a Bachelor of Water Resource Engineering from Busitema University, and Diploma in Building & Civil Engineering from Uganda Technical College.

Wilson is a results-driven Water Resource Engineer with extensive experience in WASH and infrastructure development across South Sudan. He specializes in leveraging geospatial technologies—such as ArcGIS, QGIS, HEC-HMS, and remote sensing—to improve water access, model flood risks, and design climate-resilient systems. His career achievements include leading over 50 water point rehabilitations, training more than 200 community members in sustainable WASH practices, and delivering diverse construction projects, from VIP latrines to administrative blocks. He also possesses strong technical proficiency in AutoCAD, ArchiCAD, and mobile data collection tools.`,
      image: wilsonImage
    },
    {
      name: 'Nhial D Nhial',
      role: 'Environmental Specialist',
      expertise: `Nhial is a highly skilled Environmental Engineer with a Bachelor’s and Master’s degree in Environmental Engineering/Environmental Technology and over five years of professional experience spanning academia, consultancy, and field-based projects. He currently lectures at the University of Juba, teaching Environmental Protection, Clean Energy, Environmental Risk Management, and Disaster Management, while also serving as an Energy, Environment, and Natural Resources Consultant at The Sudd Institute, providing expertise in clean energy, environmental management, and resource sustainability. Proficient in environmental impact assessment, pollution control, and sustainable resource management, he is experienced in designing and implementing innovative solutions that promote compliance, resilience, and ecosystem protection.

His hands-on experience includes an internship with SEMiLLA Sanitation in the Netherlands, where he contributed to a sanitation project in Uganda, focusing on sustainable pit latrine sludge management through anaerobic digestion, improved latrine design, and the development of safe, efficient desludging devices.`,
      image: nhialImage
    },
    {
      name: 'Jacob Mator Aketch',
      role: 'Head of Engineers',
      expertise: `Jacob holds a MSc in Mechanical Engineering from the University of Cape Town, a BSc (Hons) in Applied Science Mechanics from the University of Pretoria, and a BA in Physics from The George Washington University.

Jacob Mator Aketch is a Mechanical Engineering lecturer at the University of Juba with over six years of experience in teaching, research, and academic administration. His expertise covers thermodynamics, fluid mechanics, sustainable energy, and system design, with a research focus on energy systems analysis and nature-based carbon capture solutions. He has served in various roles, including research and teaching assistant, and as a design and innovation intern at Mitsubishi Corporation, where he developed high-performing carbon capture models.`,
      image: matorImage
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Established in Juba with vision for environmental excellence'
    },
    {
      year: '2022',
      title: 'First Major Projects',
      description: 'Successfully delivered EIA services for key infrastructure projects'
    },
    {
      year: '2023',
      title: 'Government Partnership',
      description: 'Partnered with Ministry of Health on environmental health initiatives'
    },
    {
      year: '2024',
      title: 'Expanded Services',
      description: 'Comprehensive sustainability audits and training programs launched'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Kush Environmental</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Pioneering environmental excellence in South Sudan since 2021, we are committed to 
              delivering sustainable solutions that balance development with environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2021 in Juba, South Sudan, Kush Environmental Consultant Ltd emerged 
                from a vision to bridge the gap between sustainable development and environmental 
                protection in one of Africa's newest nations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began with a simple yet powerful belief: that South Sudan's natural 
                resources and environmental heritage could be preserved while fostering economic 
                growth and social development. Since our inception, we have grown to become a 
                trusted partner for government agencies, international organizations, and private 
                sector clients.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we stand as a testament to the possibility of sustainable development, 
                offering comprehensive environmental solutions that respect both the needs of 
                today and the legacy we leave for tomorrow.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutTeam} 
                alt="Kush Environmental team working on sustainability projects"
                className="rounded-xl shadow-large w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-gradient p-8 rounded-xl">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide comprehensive, innovative environmental consulting services that enable 
                sustainable development while ensuring regulatory compliance and environmental 
                protection across South Sudan. We are committed to delivering solutions that 
                create lasting positive impact for communities, businesses, and the environment.
              </p>
            </div>
            <div className="card-gradient p-8 rounded-xl">
              <Eye className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading environmental consulting firm in South Sudan, recognized for 
                excellence in sustainable development practices, innovative solutions, and 
                unwavering commitment to environmental stewardship. We envision a future where 
                economic growth and environmental protection work hand in hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multidisciplinary team brings together decades of experience in environmental 
              science, sustainability consulting, and regulatory compliance.
            </p>
          </div>
          
          <TeamGrid members={teamMembers} />
          
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              From our founding to becoming a trusted partner in South Sudan's sustainable development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-white mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold mb-3">{milestone.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Commitment to Sustainability</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just advise on sustainability – we live it. Our practices embody the 
              principles we advocate for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Leaf className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Environmental Stewardship</h3>
              <p className="text-muted-foreground">
                We minimize our environmental footprint while maximizing positive impact through 
                every project we undertake.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-muted-foreground">
                Our solutions prioritize community needs and local capacity building, ensuring 
                lasting benefits for all stakeholders.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence Standards</h3>
              <p className="text-muted-foreground">
                We maintain the highest professional standards, continuously improving our 
                services and staying current with best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

// Read-more aware grid
interface Member {
  name: string;
  role: string;
  expertise: string;
  image?: string;
}

function TeamGrid({ members }: { members: Member[] }) {
  // Distribute members into independent vertical columns.
  // This prevents a tall card from stretching the entire row height
  // (which previously introduced large whitespace in adjacent cards).
  const columns = 3;
  const columnData: Member[][] = Array.from({ length: columns }, () => []);
  members.forEach((m, i) => columnData[i % columns].push(m));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {columnData.map((col, idx) => (
        <div key={idx} className="flex flex-col gap-8">
          {col.map((member, i) => (
            <TeamCard key={`${idx}-${i}`} member={member} />
          ))}
        </div>
      ))}
    </div>
  );
}

function TeamCard({ member }: { member: Member }) {
  const [expanded, setExpanded] = useState(false);

  const previewLimit = 180; // rough three-line preview on typical widths
  const isLong = member.expertise.length > previewLimit;
  const text = expanded || !isLong
    ? member.expertise
    : member.expertise.slice(0, previewLimit).trimEnd() + '…';

  return (
    <div className="card-gradient p-6 rounded-xl hover-lift text-center break-inside-avoid">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover object-center shadow-lg ring-1 ring-black/5"
        />
      ) : (
        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-secondary font-medium mb-3">{member.role}</p>

      <p className="text-muted-foreground text-sm whitespace-pre-line">
        {text}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-primary hover:underline text-sm font-medium"
          aria-label={expanded ? `Collapse biography of ${member.name}` : `Expand biography of ${member.name}`}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
}