import type { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  const { name, isHero, age } = student;
  return (
    <div>
      Hello {name} {isHero ? 'hero' : 'nohero'} {age > 18 ? 'adult' : 'baby'}
    </div>
  );
}
