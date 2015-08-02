using Starter.WebAPI.Angular.AzureAD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Starter.WebAPI.Angular.AzureAD.Controllers
{	
	[Authorize]
	public class ValuesController : ApiController
	{
		private static readonly ICollection<ValueModel> _values = new List<ValueModel>()
		{
			new ValueModel { Id = Guid.NewGuid(), Value = "value1" },
			new ValueModel { Id = Guid.NewGuid(), Value = "value2" },
			new ValueModel { Id = Guid.NewGuid(), Value = "value3" },
			new ValueModel { Id = Guid.NewGuid(), Value = "value4" },
		};

		// GET api/values
		public IEnumerable<ValueModel> Get()
		{
			return _values;
		}

		// GET api/values/5
		public ValueModel Get(Guid id)
		{
			return _values.SingleOrDefault(vm => vm.Id == id);
		}

		// POST api/values
		public void Post([FromBody]ValueModel value)
		{
			value.Id = Guid.NewGuid();
			_values.Add(value);
		}

		// PUT api/values/5
		public void Put([FromBody]ValueModel value)
		{
			var existingValue = _values.SingleOrDefault(vm => vm.Id == value.Id);
			existingValue.Value = value.Value;
		}

		// DELETE api/values/5				
		public void Delete(Guid id)
		{
			var existingValue = _values.SingleOrDefault(vm => vm.Id == id);
			_values.Remove(existingValue);
		}
	}
}
