using System;
using System.Reflection;

namespace Starter.WebAPI.Angular.AzureAD.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}