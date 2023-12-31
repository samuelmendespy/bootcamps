using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoExemplo.Common.Models
{
    public class Contact
{
    public string Name { get; set; }
    public string Email { get; set; }

    public Contact(string name, string email)
    {
        Name = name;
        Email = email;
    }

    public override string ToString()
    {
        return $"Name: {Name} \n Email: - {Email}";
    }
}
}