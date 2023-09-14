import { Category, Note } from '~/types/types';
import { firestore } from './firebaseConfig';
import {
    collection,
    getDocs,
    DocumentData,
    QueryDocumentSnapshot,
    where,
    query,
} from 'firebase/firestore';

const dbNotes = collection(firestore, 'notes');
const dbCategories = collection(firestore, 'categories');

/********** NOTES **********/

export const getNotes = async (): Promise<Note[]> => {
    try {
        const snapshot = await getDocs(dbNotes);
        return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
            id: doc.id,
            ...(doc.data() as Note),
        }));
    } catch (error) {
        console.error('Error getting notes:', error);
        throw error;
    }
};

export const getNotesByCategory = async (categoryID: string): Promise<Note[]> => {
    try {
        const q = query(dbNotes, where('category', '==', categoryID));
        const snapshot = await getDocs(q);
        const notes: Note[] = [];

        snapshot.forEach((doc) => {
            notes.push({
                id: doc.id,
                ...(doc.data() as Note),
            });
        });

        return notes;
    } catch (error) {
        console.error('Error getting notes by category:', error);
        throw error;
    }
};

/********** CATEGORIES **********/

export const getCategories = async (): Promise<Category[]> => {
    try {
        const snapshot = await getDocs(dbCategories);
        return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
            id: doc.id,
            ...(doc.data() as Category),
        }));
    } catch (error) {
        console.error('Error getting categories:', error);
        throw error;
    }
};

export const getCategoryByUid = async (uid: string): Promise<Category | undefined> => {
    try {
        const categories = await getCategories();
        return categories.find((category) => category.id === uid);
    } catch (error) {
        console.error('Error getting category by UID:', error);
        throw error;
    }
};
