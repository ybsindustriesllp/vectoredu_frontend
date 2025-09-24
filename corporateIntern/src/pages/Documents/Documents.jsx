import React, { useState } from 'react'
import styles from './styles.module.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaRunning, FaBug } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";

function Documents() {
    const [searchTerm, setSearchTerm] = useState("");

    const documents = [
    { id: 1, title: "Software Requirements Specification", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 2, title: "Sprint 3 planning", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 3, title: "Test Case Repository", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 4, title: "Deployment Checklist", version: "v2.1", status: "Approved", modified: "2023-01-01" },
  ];

   const templates = [
  {
    icon: <IoDocumentText className={styles.icon} />,
    title: "SRS Template",
    description: "Standard template for documenting software requirements",
  },
  {
    icon: <FaRunning className={styles.icon} />,
    title: "Sprint Planning",
    description: "Template for planning and documenting sprint goals",
  },
  {
    icon: <GiChemicalDrop className={styles.icon} />,
    title: "Test Case Template",
    description: "Standard format for writing test cases",
  },
  {
    icon: <FaBug className={styles.icon} />,
    title: "Bug Report Template",
    description: "Template for reporting and tracking bugs",
  },
  {
    icon: <MdChecklist className={styles.icon} />,
    title: "Deployment Checklist",
    description: "Comprehensive checklist for deployments",
  },
];

    const filteredDocs = documents.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.container1}>
            <div className={styles.headings}>
            <h1 className={styles.heading}>Documentation Center</h1>
            
            <div className={styles.buttons}>
                <div className={styles.searchBox}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input 
                        type="text" 
                        placeholder="Search documents..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput} 
                    />
                </div>
                <button className={styles.newTaskBtn}>
                + New Document
                </button>
            </div>
            </div>

            <div className={styles.documents}>
                {filteredDocs.length > 0 ? (
                    filteredDocs.map(doc => (
                    <div key={doc.id} className={styles.document}>
                        <div className={styles.icons}>
                        <IoDocumentTextOutline className={styles.icon1} />
                        </div>
                        <div className={styles.details}>
                        <p className={styles.docTitle}>{doc.title}</p>
                        <div className={styles.versionRow}>
                            <span>{doc.version}</span>
                            <button className={styles.detBtn}>{doc.status}</button>
                        </div>
                        <p className={styles.para}>Last modified: {doc.modified}</p>
                        <div className={styles.actions}>
                            <button>Edit</button>
                            <button>Export</button>
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <p className={styles.noResult}>No documents found</p>
                )}
                </div>
            </div>
            <div className={styles.templates}>
                <div className={styles.templateHeader}>
                    <h2>Document Templates</h2>
                </div>
                <div className={styles.templateGrid}>
                    {templates.map((template, index) => (
                    <div key={index} className={styles.template}>
                        {template.icon}
                        <h3>{template.title}</h3>
                        <p>{template.description}</p>
                    </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Documents
