using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoExemplo.Common.Models
{
    public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }


    public Person ()
    {
    }
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public override string ToString()
    {
        return $"{Name} , Age: {Age}";
    }
}
}