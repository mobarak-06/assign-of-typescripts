const multiplyValue = (x: number, y?: number): number => {
  if (y === 0) {
    return x * 0;
  } else if (!y) {
    return x * 2;
  } else {
    return x * y;
  }
};

type Value = string | number | boolean;

const processInput = (value: Value): Value => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (value === 0 && typeof value === "number") {
    return value * 10;
  } else if (typeof value === "number") {
    return value * 10;
  } else return value ? "Active" : "Inactive";
};

const formatCoordinate = (coordinate: readonly [number, number, string]) => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  let result: T[] = [];
  arrays.forEach((arr) => {
    result.push(...arr);
  });

  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) => {
  const findCourses = courses.filter(
    (course) => course.students >= minStudents && course.isPublished === true,
  );
  return findCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
};

