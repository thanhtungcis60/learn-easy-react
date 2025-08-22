import * as React from 'react';

export interface StudentProps {
    name?: string,
    age:number,
    isHero?:boolean,
    hobbyList: string[],
    sayHello:()=>void
}

export function Student ({name = 'Easy FrontEnd', isHero=false, age=0}: StudentProps) {
  return (
    <div>
      Hello {name} {isHero ? 'hero' : 'nohero'} {age > 18 ?'adult':'baby'}
    </div>
  );
}
