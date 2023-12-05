import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'
import Job from '../../components/Job'
import gov from '../../public/images/gov.png'
import hospital from '../../public/images/hospital.png'
import snps from '../../public/images/snps.png'
import Image from 'next/image'
import bordeaux from '../../public/images/IMG_1076.png'
import dell from '../../public/images/IMG_7395.png'


type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-screen table-cell align-middle text-align items-center font-mono static'>
        <Nav />
            <div className='align-middle justify-center items-center flex justify-items-center w-4/5 m-auto h-100 overflow-y-hidden'>
                <div className="grid grid-cols-3 gap-8 py-8">
                <div className='col-span-3'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>IAE Bordeaux / Université de Bordeaux</h1>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>Graduate Teaching Assistant / Student Representative</h1>
                            <h3 className='text-2xl text-white font-mono p-4'>September 2023 - Present</h3>
                        </div>
                    </div>
                    <div className=''>
                        <Image src={bordeaux} alt="bordeaux" width={500} height={500}/>
                    </div>
                    <div className='text-center col-span-2 justify-center align-middle m-auto'>
                        <ul className='text-white font-mono p-4 text-left'>
                            <li>• Student representative of the university in class and at extracurricular events.</li>
                            <br></br>
                            <li>• Successfully managed simultaneous planning of student events, IT support for university staff, and rollout of new student attendance tracking system Edusign.</li>
                        </ul>
                    </div>
                <div className='col-span-3'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>Dell Technologies</h1>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>Software Engineer I</h1>
                            <h3 className='text-2xl text-white font-mono p-4'>January 2023 - September 2023</h3>
                        </div>
                    </div>
                    <div className='text-center col-span-2 justify-center align-middle m-auto'>
                        <ul className='text-white font-mono p-4 text-left'>
                            <li>• Developed a multithreaded test framework using Python for the DU portion of Dell's 5G cloud RAN infrastructure.</li>
                            <br></br>
                            <li>• Assisted in Dell's successful launch into the 5G ORAN arena at Mobile World Congress 2023. </li>
                            <br></br>
                            <li>• Added LCOV reporting, pause/resume TTI feature, and other enhancements to a complex devops pipeline using Jenkins and GH integrations.</li>
                        </ul>
                    </div>
                    <div className=''>
                        <Image src={dell} alt="Dell" width={500} height={500}/>
                    </div>
                    <div className='col-span-3'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>Synopsys Inc.</h1>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>Engineering Intern</h1>
                            <h3 className='text-2xl text-white font-mono p-4'>October 2021 - September 2022</h3>
                        </div>
                    </div>
                    <div className=''>
                        <Image src={snps} alt="synopsys" width={500} height={500}/>
                    </div>
                    <div className='text-center col-span-2 justify-center align-middle m-auto'>
                        <ul className='text-white font-mono p-4 text-left'>
                            <li>• Simulated and debugged DDR PHY releases for production chips for major industry
clients to mitigate schedule risk.</li>
                            <br></br>
                            <li>• Implemented swizzling features in LPDDR4/3 PHYs to expedite customer
implementation in their SoC designs.</li>
                            <br></br>
                            <li>• Contributed to building a complex Jira-Wrike ticket synchronization script to expedite
internal workflows and assist in long term project planning.</li>
                        </ul>
                    </div>
                    <div className='col-span-3'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>Government of Canada</h1>
                            <h1 className='text-4xl text-white font-bold font-mono p-4'>Data Analyst</h1>
                            <h3 className='text-2xl text-white font-mono p-4'>March 2021 - August 2021</h3>
                        </div>
                    </div>
                    <div className='text-center col-span-2 justify-center align-middle m-auto'>
                        <ul className='text-white font-mono p-4 text-left'>
                            <li>• Was at the forefront of stakeholder outreach for Canada's COVID-19 testing program,
dealing with small businesses, NGOs, and federal, provincial and municipal government
officials.</li>
                            <br></br>
                            <li>• Implemented a data capture pipeline for COVID-19 testing data in Canadian
workplaces, allowing the Deputy Minister's office to view case numbers and track
contagion across geographic areas.</li>
                            <br></br>
                            <li>• Oversaw UAT, data validation, and data analysis on large datasets to assure data
integrity and successful data pipelining from a public frontend.</li>
                        </ul>
                    </div>
                    <div className=''>
                        <Image src={gov} alt="Government of Canada" width={500} height={500}/>
                    </div>
                    <div className='col-span-3 text-center'>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Ottawa Hospital Research Institute</h1>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Bioinformatics Intern</h1>
                        <h3 className='text-2xl text-white font-mono p-4'>May 2020 - August 2020</h3>
                    </div>
                    <div className=''>
                        <Image src={hospital} alt="ohri" width={500} height={500}/>
                    </div>
                    <div className='text-center col-span-2 justify-center align-middle m-auto'>
                        <ul className='text-white font-mono p-4 text-left'>
                            <li> Worked with a multi-disciplinary team to develop a data analysis pipeline for bulk RNA-seq data for Genome Canada's Genomic Applications Partnership Program (GAPP).</li>
                            <br></br>
                            <li>• Used a high performance CentOS cluster to schedule and test fusion callers using bash
and R.</li>
                            <br></br>
                            <li>• Assisted in presenting an RNA-seq seminar to academics.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index