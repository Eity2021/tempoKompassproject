import React from "react";

export default function Reports() {
  const reports = {
    heading:
      "font-poppins text-[#181E27]  font-bold   text-[42px]   text-center my-4 ",
    headingPart: "text-[22px] my-2 font-poppins text-[#181E27] ",
    paragraph: "font-poppins text-[#181E27]  text-[16px] mb-4  font-normal ",
    para: "font-poppins text-[#181E27] text-[16px] font-normal mb-4 pl-6",
    link: "text-primary",
  };
  return (
    <div>
      <div className="container px-6 lg:px-14 py-24 text-justify">
        <h1 className={reports.heading}>Kompass Report 2024</h1>
        <h1 className={reports.headingPart}>July 12, 2023 </h1>

        <p className={reports.paragraph}>
          The dynamic management of Kompass Technologies Limited encourages the
          following practices at the organization to build trust, belongingness,
          fellowship & empathy among themselves.
        </p>
        <h1 className={reports.headingPart}>Career Development & Learning: </h1>
        <div>
          <p className={reports.para}>
            1. Training & learning: Kompass Technologies Limited always
            encourages continuous learning, team building, sharing knowledge, in
            house training for individual career growth and learning.{" "}
          </p>
          <p className={reports.para}>
            2. Program: Kompass Technologies Limited organizes different
            presentation sessions, brainstorming sessions, team meetings, etc.
          </p>
          <p className={reports.para}>
            3. Resources: Kompass Technologies Limited, have access to different
            online courses, training programs, and also in-house resources to
            train the employees to maintain a continuous learning environment in
            the organization.
          </p>
          <p className={reports.para}>
            4. Ethics & Loyalty: Kompass Technologies Limited, expects ethical
            behavior and loyalty from its employee in all areas. We encourage
            our employees to be ethical, honest, trustworthy, committed, and
            loyal. The copyright of the code belongs to the organization, any
            breach of that ethical value will be handled by the legal committee
            of the organization.{" "}
          </p>
        </div>

        <h1 className={reports.headingPart}>
          Diversity, Equity, and Inclusion (DEI)
        </h1>
        <div>
          <p className={reports.para}>
            {" "}
            1. Hiring and Recruitment: Kompass Technologies Limited, implemented
            inclusive hiring practices to attract a diverse pool of candidates.
            We also ensure that the hiring process is free from bias and
            discrimination.{" "}
          </p>
          <p className={reports.para}>
            2. Equal Opportunities: Kompass Technologies Limited, promotes equal
            opportunities for career growth and advancement which is vital for
            fostering an inclusive workplace. We have clear promotion criteria
            and ensure that employees from relevant backgrounds have access to
            growth opportunities, mentorship programs, and leadership
            development initiatives.{" "}
          </p>
          <p className={reports.para}>
            3. Inclusive culture policies: Kompass Technologies Limited, creates
            an inclusive culture starting with policies and practices promoting
            diversity and equality.{" "}
          </p>
          <p className={reports.para}>
            4. Leadership Commitment: DEI initiatives must have the support and
            commitment of leadership. Executives and managers should champion
            diversity, equity, and inclusion efforts, lead by example and hold
            themselves accountable for creating an inclusive work environment.{" "}
          </p>
        </div>

        <h1 className={reports.headingPart}>Environment & Sustainability</h1>
        <div>
          <p className={reports.para}>
            1. CSR: Kompass Technologies Limited, practices CSR within the
            organizations. We participate in different programs as part of the
            CSR of the organization. We also follow ISO 26000 social
            responsibility in our business operations.
          </p>
          <p className={reports.para}>
            2. Energy Efficiency: Kompass Technologies Limited, focuses on
            optimizing their energy consumption by adopting energy-efficient
            technologies and practices. This includes energy-efficient hardware,
            implementing power management strategies, and utilizing cloud-based
            services to minimize energy usage in data centers.
          </p>
          <p className={reports.para}>
            3. Recycle and Reuse: Kompass Technologies Limited, encourage its
            employees on less printing and paperless office. Also, reuse the
            printed papers in different drafts or design activities. 4.
            Environmental Stewardship and Philanthropy: Kompass Technologies
            Limited, demonstrate its commitment to environmental sustainability
            by planting trees and supporting environmental initiatives. This can
            involve financial contributions, employee volunteer programs, or
            partnering with environmental nonprofit organizations to work on
            specific projects.
          </p>
        </div>
        <h1 className={reports.headingPart}>Social Impact</h1>
        <div>
          <p className={reports.para}>
            1. Job creation: Kompass Technologies Limited often employs many
            people by creating job opportunities and contributing to local
            economics. We provide employment for software engineers, designers,
            testers, project managers, marketing managers, tech sales, customer
            support teams, and other professionals.
          </p>
          <p className={reports.para}>
            2. Technological innovation: Kompass Technologies Limited, develop
            new software applications, tools, and platforms that can improve
            productivity, enhance communication, manage time, and so on.
          </p>
          <p className={reports.para}>
            3. Education and Skill development: Kompass Technologies Limited,
            often invest in educational initiatives, such as workshops, coding
            boot camps, training program, and scholarships. 4 Economic Growth &
            Empowerment: As a startup Kompass Technologies Limited, can
            contribute to economic growth by creating innovative solutions and
            attracting investments. We can also empower entrepreneurs and small
            businesses by providing software tools and platforms that enable
            them to compete in the digital marketplace.
          </p>
        </div>
        <h1 className={reports.headingPart}>Work-life balance </h1>
        <div>
          <p className={reports.para}>
            1 Flexible work arrangements: Kompass Technologies Limited, offering
            flexible work options, such as remote work, flextime, or compressed
            workweeks, can give more control over their schedules and help them
            better balance their personal and professional commitments, reduce
            commuting time and create a more adaptable work environment as per
            their HR Policy.{" "}
          </p>
          <p className={reports.para}>
            2 Encouraging Boundaries and Disconnecting: Kompass Technologies
            Limited, foster a culture that respects boundaries and encourages
            employees to disconnect from work during non-working hours.
            Promoting a healthy work-life integration rather than constant work
            availability can help employees recharge and maintain a better
            balance.{" "}
          </p>
          <p className={reports.para}>
            3 Employees Support & Development: Kompass Technologies Limited,
            invest in employee development programs, training, and mentoring
            that can help employees grow professionally and achieve their career
            goals while maintaining a healthy work-life balance
          </p>
        </div>

        <>
          <div className={reports.para}>
            <p >AKM Ahsanul Hoque</p>
            <p >Co-founder and COO</p>
          </div>
        </>
      </div>
    </div>
  );
}
