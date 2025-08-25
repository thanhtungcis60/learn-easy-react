import type { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
  onClick?: (student: Student) => void;
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  const { name, isHero, age } = student;
  return (
    <div onClick={(e) => onClick?.(student)}>
      Hello {name} {isHero ? 'hero' : 'nohero'} {age > 18 ? 'adult' : 'baby'}
    </div>
  );
}
