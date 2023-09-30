using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntroInheritance.Models
{
    public class Pessoa
    {
        public string Nome { get; set; } = "";
        public int Idade { get; set; }
        public string Email { get; set;} = "";

        public virtual void Apresentar()
        {
            Console.WriteLine($"Olá! O meu nome é {Nome} e tenho {Idade} anos.");
        }
    }
}