import React from 'react'
import styles from './Peoples.module.css'
import PersonCard from '../../components/PersonCard';
import { API } from '../../API/tmbd';
import { useState, useEffect } from 'react';

function Peoples() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await API('person/popular');
        setPeople(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching people:', error);
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  if (loading) {
    return (
      <main className={styles.peoplesContainer}>
        <section className={styles.peoplesSection}>
          <h1 className={styles.heading}>Popular People</h1>
          <p>Loading...</p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.peoplesContainer}>
      <section className={styles.peoplesSection}>
        <h1 className={styles.heading}>Popular People</h1>
        <p className={styles.description}>Discover the most popular actors, directors, and other industry professionals</p>
        
        <div className={styles.peopleGrid}>
          {people.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Peoples